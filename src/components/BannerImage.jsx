export default function BannerImage({ desktop, mobile, zoom = true }) {
  return (
    <div
      className={`banner-photo absolute inset-0 bg-cover bg-center bg-no-repeat ${zoom ? "banner-zoom" : ""}`}
      style={{
        "--banner-mobile": `url("${mobile}")`,
        "--banner-desktop": `url("${desktop}")`,
      }}
      aria-hidden="true"
    />
  );
}
