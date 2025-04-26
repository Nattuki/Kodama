import yaml from "yaml"
import chordTreeYaml from "@/data/chordTreeData.yaml?raw"
import { ChordTreeNode } from "../types/ChordTreeNode"

export const loadChordTree = (): ChordTreeNode => {
  const parsed = yaml.parse(chordTreeYaml) as ChordTreeNode
  return parsed
}
