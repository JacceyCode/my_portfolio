export const handleSectionScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  targetId: string
) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  const yOffset = 100; // adjust your offset here

  if (element) {
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
