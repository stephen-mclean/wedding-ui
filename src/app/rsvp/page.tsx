import RSVPForm from "./form";

export default function RSVP() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-serif text-4xl text-center">RSVP</h1>
      <RSVPForm />
    </div>
  );
}
