import { publicUrl } from '../lib/publicUrl';

export default function BannerImage({ desktop, mobile, zoom = true }) {
  return (
    <picture className={`banner-photo absolute inset-0 ${zoom ? 'banner-zoom' : ''}`} aria-hidden="true">
      <source media="(min-width: 768px)" srcSet={publicUrl(desktop)} />
      <img src={publicUrl(mobile)} alt="" className="h-full w-full object-cover" />
    </picture>
  );
}
