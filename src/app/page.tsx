import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const [positivesCount, sessionsCount] = await Promise.all([
    prisma.positiveItem.count(),
    prisma.downSession.count(),
  ]);

  return (
    <Container className="pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to Smile</h1>
        <p className="mt-2 text-sm text-zinc-600">
          A calm place to collect what’s true about you — and come back to it on hard days.
        </p>
      </div>

      <div className="grid gap-4">
        <Card title="Start here">
          <ol className="list-decimal space-y-1 pl-5 text-sm text-zinc-700">
            <li>Add at least 5 positives so the app can support you better.</li>
            <li>When you’re feeling down, describe what’s going on and get a tailored boost + prompts.</li>
            <li>Review your history to see patterns and what helped.</li>
          </ol>
        </Card>

        <Card title="Quick links">
          <div className="grid gap-3">
            <Link href="/positives" className="rounded-xl border border-zinc-200 p-3 no-underline hover:bg-zinc-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">My Positives</div>
                  <div className="text-xs text-zinc-600">{positivesCount} saved</div>
                </div>
                <span aria-hidden>→</span>
              </div>
            </Link>

            <Link href="/down" className="rounded-xl border border-zinc-200 p-3 no-underline hover:bg-zinc-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">I’m Feeling Down</div>
                  <div className="text-xs text-zinc-600">Get encouragement + prompts</div>
                </div>
                <span aria-hidden>→</span>
              </div>
            </Link>

            <Link href="/history" className="rounded-xl border border-zinc-200 p-3 no-underline hover:bg-zinc-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">History</div>
                  <div className="text-xs text-zinc-600">{sessionsCount} sessions</div>
                </div>
                <span aria-hidden>→</span>
              </div>
            </Link>
          </div>
        </Card>

        <Card title="A gentle reminder">
          <p className="text-sm text-zinc-700">
            This app isn’t here to “fix” you. It’s here to help you remember who you are when your mind gets loud.
          </p>
        </Card>
      </div>
    </Container>
  );
}
