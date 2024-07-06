import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  contactNo: z.string().min(12).max(12),
  email: z.string().includes('@'),
  message: z.string(),
});

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contactNo: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className="mx-auto mt-10 w-full max-w-2xl rounded-3xl bg-white p-8 shadow-md">
      <CardContent className="pt-5">
        <div className="text-center">
          <h1 id="form-title" className="mb-4 text-4xl font-bold">
            Get In Touch
          </h1>
          <p className="mb-10 text-sm text-gray-500">
            Want to learn more about our services, our dedicated support team is here to help you.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} aria-labelledby="form-title">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative mb-10">
                  <FormLabel className="absolute -top-2 left-3 block rounded bg-white px-1">
                    Your name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ex. Juan dela Cruz" {...field} className="px-" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNo"
              render={({ field }) => (
                <FormItem className="relative mb-10">
                  <FormLabel className="absolute -top-3 left-3 block rounded bg-white px-1">
                    Contact no.
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ex. +639 000 00000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative mb-10">
                  <FormLabel className="absolute -top-3 left-3 block rounded bg-white px-1">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ex. you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="relative mb-10">
                  <FormLabel className="absolute -top-3 left-3 block rounded bg-white px-1">
                    Your message
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="What`s on your mind?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-tertiary hover:bg-tertiary/90 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-75"
              size={'lg'}
            >
              Send my message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
