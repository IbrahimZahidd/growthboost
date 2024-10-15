import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, phone, skype, budget } = await request.json();

    // Validate input
    if (!name || !email || !phone || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to database
    try {
      const application = await prisma.application.create({
        data: { name, email, phone, skype, budget },
      });
      console.log("Application saved to database:", application);
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: `Database error: ${(dbError as Error).message}` },
        { status: 500 }
      );
    }

    // Send email
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use TLS
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "buttibrahim848@gmail.com",
        subject: "New Application Submitted",
        html: `
          <h1>New Application</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Skype:</strong> ${skype || "Not provided"}</p>
          <p><strong>Budget:</strong> ${budget}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Email error:", emailError);
      return NextResponse.json(
        { error: `Email error: ${(emailError as Error).message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: `Error submitting application: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
