export default function Header({ title, date }: { title: string; date: string }) {
  return (
    <>
      <h1 className="text-4xl font-bold font-sans mb-2 dark:text-white">{title}</h1>
      <div className="mb-8">
        <p>
          <strong>Date:</strong> {date}
        </p>
        {/* <p>
          <strong>Reading time:</strong> 1 min read (62)
        </p> */}
      </div>
    </>
  );
}
