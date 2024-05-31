import { StyleSheet } from 'react-native'

import { colors } from '../../ds/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.primary
  },
  accordionDescription: {
    color: colors.text.primary,
    marginBottom: 24
  },
  accordionContent: {
    flexShrink: 1
  },
  accordionTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  }
})
