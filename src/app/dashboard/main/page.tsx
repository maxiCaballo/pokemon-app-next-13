import { WidgetGrid } from '@/components/WidgetGrid';

export const metadata = {
  title: 'Admin dashboard',
  description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General information</span>

      <WidgetGrid />
    </div>
  );
}
