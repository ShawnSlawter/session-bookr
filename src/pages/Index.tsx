import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Alex Moreno</h1>
        <p className="mt-4 text-lg">Strength & Conditioning Coach in Barcelona.</p>
      </main>
    </div>
  );
};

export default Index;
