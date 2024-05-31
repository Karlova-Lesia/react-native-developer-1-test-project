import { StyleSheet } from 'react-native'

import { colors } from '../../colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 16,
    borderRadius: 15,
    backgroundColor: colors.surface.primary,
    overflow: 'hidden'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: colors.select.primary
  },
  icon: {
    marginHorizontal: 12
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    backgroundColor: colors.select.primary
  }
})
