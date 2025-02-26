import { AnimationItem } from "lottie-web";
import {
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimationConfig } from "types/animation";
import { AnimationContainer, StyledButton, StyledLink } from "./style";
import { ButtonSize, ButtonStyleProperties, ButtonVariant } from "./types";

const DEFAULTS: ButtonStyleProperties<false> = {
  variant: "primary",
  size: "regular",
};

const BaseButton: FC<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  animationConfig?: Omit<AnimationConfig, "container">;
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean;
}> = ({
  variant,
  size,
  href,
  children,
  onClick,
  animationConfig,
  ...rest
}): ReactElement => {
  const animationContainer = useRef<HTMLDivElement>(undefined);
  const [animation, setAnimation] = useState<AnimationItem>();
  useEffect(() => {
    if (animationConfig && animationContainer.current && !animation) {
      import("lottie-web").then((Lottie) => {
        setAnimation(
          Lottie.default.loadAnimation({
            name: animationConfig.name,
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: animationConfig.data,
          }),
        );
      });
    }
  }, [animationConfig, animationContainer.current]);

  function playAnimation() {
    if (animation?.isPaused) {
      animation?.play();
      animation?.resetSegments(true);
    }
  }

  if (href) {
    return (
      <StyledLink
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={playAnimation}
        onFocus={playAnimation}
        onClick={onClick}
        size={size ?? DEFAULTS.size}
        $variant={variant ?? DEFAULTS.variant}
        {...rest}
      >
        <span>{children}</span>
        {animationConfig && (
          <AnimationContainer size={size ?? DEFAULTS.size}>
            <div ref={animationContainer} />
          </AnimationContainer>
        )}
      </StyledLink>
    );
  } else {
    return (
      <StyledButton
        onMouseEnter={playAnimation}
        onFocus={playAnimation}
        onClick={onClick}
        size={size ?? DEFAULTS.size}
        $variant={variant ?? DEFAULTS.variant}
        {...rest}
      >
        <span>{children}</span>
        {animationConfig && (
          <AnimationContainer size={size ?? DEFAULTS.size}>
            <div ref={animationContainer} />
          </AnimationContainer>
        )}
      </StyledButton>
    );
  }
};

export default BaseButton;
