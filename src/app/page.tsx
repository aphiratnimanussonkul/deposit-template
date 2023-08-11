export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="mailto:lessex@odds.team.com?subject=test send mail from electron&body=TThe message"
          target="_blank"
        >
          <button id="btnOutlook">Go to Outlook</button>
        </a>
      </div>
    </main>
  );
}
