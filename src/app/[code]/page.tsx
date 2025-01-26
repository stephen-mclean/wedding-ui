export default async function UpdateInvite({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-serif text-4xl text-center">RSVP ({code})</h1>
    </div>
  );
}
