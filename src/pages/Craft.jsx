import ScrollReveal from '../components/ui/ScrollReveal.jsx';

export default function Craft() {
  return (
    <div className="container">
      <ScrollReveal>
        <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-dimmed)', marginBottom: 'var(--space-8)' }}>
            Home → Craft
          </p>
          <h1 style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--space-10)',
          }}>
            Craft
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Craft gallery will be built in Phase 6.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
