import { FC, Fragment, ReactElement } from "react";
import { MixedFontTitle } from "types/title";
import { Regular, Cursive, TitleContainer } from "./styles";

const MixedFontTitle: FC<{
  title: MixedFontTitle;
}> = ({ title }): ReactElement => (
  <TitleContainer>
    {title.map(({ text, fontType }, i) => (
      <Fragment key={i}>
        {i > 0 && <>&nbsp;</>}
        {{
          cursive: <Cursive>{text}</Cursive>,
          regular: <Regular>{text}</Regular>,
        }[fontType]}
      </Fragment>
    ))}
  </TitleContainer>
);

export default MixedFontTitle;
