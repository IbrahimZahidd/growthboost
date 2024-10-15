"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skype: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);
    try {
      const response = await axios.post("/api/apply", formData);
      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          skype: "",
          budget: "",
        });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      if (axios.isAxiosError(error) && error.response) {
        setSubmitError(`Error: ${error.response.data.error}`);
      } else {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Apply Now
        </h2>
        {submitSuccess ? (
          <Alert className="max-w-lg mx-auto">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your application has been submitted successfully.
            </AlertDescription>
          </Alert>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Fill out the form below to apply for our services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skype">Skype (optional)</Label>
                    <Input
                      id="skype"
                      name="skype"
                      value={formData.skype}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Monthly Marketing Budget</Label>
                  <Select
                    name="budget"
                    onValueChange={(value: string) =>
                      handleChange({ target: { name: "budget", value } })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select monthly budget" />
                    </SelectTrigger>
                    <SelectContent className="z-[100] bg-white">
                      <SelectItem value="Less than $10,000">
                        Less than $10,000
                      </SelectItem>
                      <SelectItem value="$10,000 to $20,000">
                        $10,000 to $20,000
                      </SelectItem>
                      <SelectItem value="$20,000 to $50,000">
                        $20,000 to $50,000
                      </SelectItem>
                      <SelectItem value="$50,000 to $100,000">
                        $50,000 to $100,000
                      </SelectItem>
                      <SelectItem value="$100,000 to $250,000">
                        $100,000 to $250,000
                      </SelectItem>
                      <SelectItem value="$250,000+">$250,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                {submitError && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
