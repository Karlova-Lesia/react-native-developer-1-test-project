import { TouchableOpacity } from 'react-native'

import { Text } from '../text'
import { styles } from './styles'

type TagProps = {
  text: string
  onPress: () => void
}

export function Tag(props: TagProps) {
  const { text, onPress } = props

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text typeface={'P3-Medium'}>{text}</Text>
    </TouchableOpacity>
  )
}
