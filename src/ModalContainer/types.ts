export type Props = {
  id?: string,
  className?: string,
  style?: Record<string, unknown>,
  htmlElement?: string,
  htmlAttributes?: {
    onClick?: () => void
  },
}
