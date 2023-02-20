import { FC, ReactElement, ReactNode } from "react";
import { StyledButton, StyledLink } from "./style";
import { ButtonVariant } from "./types";

const DEFAULT_VARIANT = 'primary';

const BaseButton: FC<{
  variant?: ButtonVariant
  children: ReactNode;
  href?: string;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
}> = ({
  variant,
  href,
  children,
  onMouseEnter,
  onFocus,
  onClick,
  ...rest
}): ReactElement => {
  if (href) {
    return (
      <StyledLink
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={onMouseEnter}
        onFocus={onFocus}
        onClick={onClick}
        variant={variant ?? DEFAULT_VARIANT}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  } else {
    return (
      <StyledButton
        onMouseEnter={onMouseEnter}
        onFocus={onFocus}
        onClick={onClick}
        variant={variant ?? DEFAULT_VARIANT}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
};

export default BaseButton;
