import { ArrowLeft } from "lucide-react";

export const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
    <div className="max-w-lg text-center">
      <p className="section-label">404 / Page not found</p>
      <h1 className="mt-4 text-6xl font-bold">Lost in the <span className="serif text-primary">archive.</span></h1>
      <p className="mt-5 text-foreground/60">The page you are looking for does not exist or has moved.</p>
      <a href="/" className="primary-button mt-8"><ArrowLeft size={16} /> Back home</a>
    </div>
  </main>
);
