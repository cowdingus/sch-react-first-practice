export default function Media({ title, image, children }) {
  return (
    <div className="media my-3">
      <img src={process.env.PUBLIC_URL+"image/"+image}
        className="mr-3" alt="media" width="100" />
      <div className="media-body text-left">
        <h5 className="mt-0">{title}</h5>
        {children}
      </div>
    </div>
  );
}
