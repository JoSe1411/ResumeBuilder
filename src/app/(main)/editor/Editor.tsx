'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ClientSideEditor() {
  return (
    <div className="flex h-full min-h-full flex-col">
      <header className="flex-none border-b px-3 py-4 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps to create your resume. Your progress will be saved automatically.
        </p>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="flex h-full">
          <div className="w-1/2 border-r border-border p-4">left</div>
          <div className='w-1/2 p-4'>right</div>
        </div>
      </main>
      <footer className="mt-auto flex-none border-t px-3 py-4">
        <div className="mx-auto flex flex-wrap justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="secondary">Previous Step</Button>
            <Button>Next Step</Button>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Button asChild>
                <Link href="/resume">Close</Link>
              </Button>
              <div className="text-muted-foreground opacity-0">saving...</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
