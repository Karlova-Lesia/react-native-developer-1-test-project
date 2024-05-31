import { ReactNode } from 'react'
import { View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { Text } from '../text'
import { colors } from '../../colors'
import { styles } from './styles'

type ExpandableSectionProps = {
  expanded: boolean
  title: string
  children: ReactNode
  onPress: () => void
}

export function ExpandableSection(props: ExpandableSectionProps) {
  const { expanded, title, children, onPress } = props

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={onPress}>
        <Text typeface={'H4'}>{title}</Text>
        <Icon
          name={expanded ? 'chevron-thin-up' : 'chevron-thin-down'}
          size={14}
          color={colors.text.primary}
          style={styles.icon}
        />
      </Pressable>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  )
}
