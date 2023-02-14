import _service from '@netuno/service-client';
export default function ProductImage({uid}) {
  const servicePrefix = _service.config().prefix;
  return (
    <img src={`${servicePrefix}events/image?uid=${uid}`}/>
  );
}