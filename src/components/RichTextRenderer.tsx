"use client";

interface Props {
  content?: string;
  cusClass?: string;
}

const RichTextRenderer = ({ content = "", cusClass = "" }: Props) => {
  return (
    <div
      className={`portable-text ${cusClass}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextRenderer;
