import variables from './variable.module.scss';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
    </main>
  );
}
