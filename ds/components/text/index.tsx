import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  TextStyle
} from 'react-native'

import { SchemeColors, colors } from '../../colors'
import { styles } from './styles'

export type Typeface = 'H4' | 'P3' | 'P3-Medium'

type TextProps = {
  typeface?: Typeface
  color?: keyof SchemeColors['text']
  style?: StyleProp<TextStyle>
} & RNTextProps

export function Text(props: TextProps) {
  const { typeface, color, style, children } = props

  const textStyles = StyleSheet.flatten([
    styles.base,
    typeface ? styles[typeface] : undefined,
    { color: color ? colors.text[color] : colors.text.primary },
    style
  ])

  return <RNText style={textStyles}>{children}</RNText>
}
