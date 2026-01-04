function Home() {
  return (
    <section className="max-w-5xl mx-auto text-center bg-soft rounded-xl p-10 shadow-md">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Bienvenido a MiVet
      </h2>

      <p className="text-lg text-primary/80 mb-8">
        Una plataforma que conecta clínicas veterinarias y dueños de mascotas
        para una atención más simple, rápida y organizada.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/register"
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition"
        >
          Crear cuenta
        </a>

        <a
          href="/login"
          className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-background transition"
        >
          Iniciar sesión
        </a>
      </div>
    </section>
  );
}

export default Home;
