import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ExpandableSection } from '../../ds/components/expandable-section'
import { Tag } from '../../ds/components/tag'
import { Text } from '../../ds/components/text'
import { styles } from './styles'

import data from '../../data/mock.json'

interface Data {
  section: Section
  sectionWithDescription: Section
}

interface Section {
  title: string
  tags: string[]
  description?: string
}

interface SectionWithKey extends Section {
  key: string
}

export function Test() {
  const insets = useSafeAreaInsets()

  const { section, sectionWithDescription }: Data = data

  const sections: SectionWithKey[] = [
    { ...sectionWithDescription, key: 'sectionWithDescription' },
    { ...section, key: 'section' }
  ]

  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (key: string) => {
    setExpandedSections(prevExpandedSections => {
      if (prevExpandedSections.includes(key)) {
        return prevExpandedSections.filter(sectionKey => sectionKey !== key)
      }

      return [...prevExpandedSections, key]
    })
  }

  const handleTagPress = (sectionKey: string) => {
    setExpandedSections(prevExpandedSections => {
      if (prevExpandedSections.includes(sectionKey)) {
        return prevExpandedSections.filter(key => key !== sectionKey)
      }

      return prevExpandedSections
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }}
      >
        {sections.map(({ title, key, tags, description }) => (
          <ExpandableSection
            key={key}
            title={title}
            expanded={expandedSections.includes(key)}
            onPress={() => toggleSection(key)}
          >
            <View style={styles.accordionContent}>
              {description && (
                <Text style={styles.accordionDescription} typeface='P3'>
                  {description}
                </Text>
              )}
              <FlatList
                contentContainerStyle={styles.accordionTags}
                data={tags}
                renderItem={({ item }) => <Tag text={item} onPress={() => handleTagPress(key)} />}
                keyExtractor={item => item}
              />
            </View>
          </ExpandableSection>
        ))}
      </ScrollView>
    </View>
  )
}
