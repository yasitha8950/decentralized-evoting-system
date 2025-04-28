import React, { useState, useEffect, useContext } from "react";
import Image from 'next/image';
import Countdown from "react-countdown";

// INTERNAL IMPORT

import { VotingContext } from "../context/Voter";
import Style from "../styles/index.module.css";
import Card from "../components/Card/Card";
import image from "../assets/candidate-1.png";

const Index = () => {
  const { votingTitle } = useContext(VotingContext);
  return <div>{votingTitle}</div>
};

export default Index;
