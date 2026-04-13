import { Resend } from "resend";
import { EmailTemplate } from "~/components/emailTemplate";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName = "there" } = body;

    if (!email) {
      const error = new Error("No email was provided");
      console.log(error);
      return Response.json(error, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: "Amr <updates@egeex.com>",
      to: [email],
      subject: "you're on the list >:)",
      react: EmailTemplate({ firstName }),
    });

    if (error) {
      console.log("error1");
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("error2");
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
