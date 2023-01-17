import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';
import {
  Subscription,
  SubText,
  Form,
  FormInput,
} from './elements';
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {collection,getDocs,deleteDoc,doc,getDoc,onSnapshot,query, where, setDoc,addDoc} from "firebase/firestore";


function InfoSectionCustom({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {

  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoader(true);
    addDoc(collection(db, "contacts"),{
        email: email,
    }).then(() => {
        setLoader(false);
    }).catch((error) => {
        alert(error.message);
        setLoader(false);
    });
    setEmail("");
  };

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                 {/** <Link to='/contact'>
                 <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>*/}
                <Subscription>
                    {/** <SubText>Puedes darte de baja en cualquier momento.</SubText>*/}
                    <Form onSubmit={handleSubmit}>
                      <FormInput name='email'             
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                      <Button
                        style={{ background: loader ? "#ccc" : " rgb(29, 110, 202)" }}
                      fontBig>Empezar</Button>
                    </Form>
                  </Subscription>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionCustom;
