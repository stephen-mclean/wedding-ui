import RSVPForm from "./form";

export default function RSVP() {
  return (
    <div className="flex flex-col gap-6 flex-1 lg:max-w-lg">
      <h1 className="font-serif text-4xl text-center">RSVP</h1>
      <p className="font-sans text-base">
        You can find your invite code on the back of your invitation printed on
        the same sticker as the QR code. Scanning the QR code will take you to
        your invite automatically, but you can type in the code manually here if
        you like.
      </p>
      <RSVPForm />
    </div>
  );
}
