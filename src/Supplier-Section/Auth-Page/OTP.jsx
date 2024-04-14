import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./auth.css";
import "./Otp.css";
import useOtp from "../Hooks/useOtp";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const { handleOtp, createMutation, enteredOtp, setIsCreated, isCreated } =
    useOtp();
  const naivgate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate({
      ...enteredOtp,
    });
    alert("otp received");
    setIsCreated(true);
    console.log(isCreated);

    if (isCreated === true) {
      naivgate("/dashboard");
    } else {
      alert("try again");
    }
  };
  return (
    <div className="otp-component">
      <h3 className="otp-title">Please Check your email</h3>
      <Form
        style={{ width: "100%", marginLeft: "-5%", marginTop: "5%" }}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3"
          controlId="formBasicOtp"
          style={{ marginLeft: "20%", marginTop: "30px" }}
        >
          <Form.Label>Enter Otp</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter otp"
            name="OTP"
            style={{ width: "90%", padding: "15px" }}
            onChange={handleOtp}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          style={{
            marginLeft: "20%",
            backgroundColor: "#39ac92",
            marginTop: "2%",
            border: "#39ac92",
            width: "72%",
            padding: "8px",
          }}
        >
          Enter
        </Button>
      </Form>
    </div>
  );
};

export default OTP;
