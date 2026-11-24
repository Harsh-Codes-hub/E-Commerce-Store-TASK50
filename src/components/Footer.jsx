import Container from "./Container";

const Footer = () => {
  return (
    <footer
      className="border-y border-(--border-muted)"
      style={{ background: "var(--gradient-b)" }}
    >
      <Container>
        <div className="flex items-center justify-center py-2 text-lg text-(--text)">
          <p>© 2026 Store. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
