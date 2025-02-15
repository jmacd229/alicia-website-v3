import { FC, Fragment, ReactElement } from "react";
import { FontSize } from "styles/font";
import { type MixedFontTitle } from "types/title";
import { Cursive, Regular, TitleContainer } from "./styles";

const MixedFontTitle: FC<{
  title: MixedFontTitle;
  wrap?: boolean;
  fontSize?: { cursive: FontSize; regular: FontSize };
  underline?: boolean;
  lineBreak?: boolean;
  responsive?: boolean;
}> = ({
  title,
  lineBreak = false,
  wrap = true,
  fontSize,
  underline = true,
  responsive = true,
  ...rest
}): ReactElement => (
  <TitleContainer $wrap={wrap} {...rest}>
    {title.map(({ text, fontType }, i) => (
      <Fragment key={i}>
        {i > 0 && !lineBreak && <>&nbsp;</>}
        {
          {
            cursive: (
              <Cursive
                $fontSize={fontSize?.cursive ?? "3xl"}
                $underline={underline}
                $responsive={responsive}
              >
                {text}
              </Cursive>
            ),
            regular: (
              <Regular
                $fontSize={fontSize?.regular ?? "3xl"}
                $responsive={responsive}
              >
                {text}
              </Regular>
            ),
          }[fontType]
        }
      </Fragment>
    ))}
  </TitleContainer>
);

export default MixedFontTitle;
