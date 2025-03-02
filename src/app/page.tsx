import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { features } from '@/constants/features';

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl">
              Create Your Professional Resume
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Build a standout resume in minutes with our AI-powered platform. Professional
              templates and expert guidance included.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/resume/builder">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Create Resume
              </Button>
            </Link>
            <Link href="/examples">
              <Button variant="outline">View Examples</Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map(feature => (
              <div
                key={feature.title}
                className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4"
              >
                <feature.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
