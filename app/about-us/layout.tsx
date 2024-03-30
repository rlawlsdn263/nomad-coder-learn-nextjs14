export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; /about-us 페이지를 위한 레이아웃입니다!
    </div>
  );
}
