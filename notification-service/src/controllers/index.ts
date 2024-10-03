import express from "express";
import twilioClient from "../lib/twilio";

export const sendSms = async (req: express.Request, res: express.Response) => {
  try {
    const { body, to } = req.body;

    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
      body,
      to,
    });

    res.status(200).json({msg: "Message sent successfully."});
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const sendEmail = async (req: express.Request, res: express.Response) => {};
