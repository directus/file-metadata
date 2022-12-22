### Goals

- Performant and efficient
  - Read only the necessary parts of the file
  - Stop as soon as all desired tags are found
- Clean and healthy code base
  - Reasonable abstraction: Don't let the heavy stuff (find / parse tags) get into the way of simpler stuff
  - Extendable
- Fail-safe
  - Get as much tags as possible - don't fail the whole process if a single tag cannot be parsed
- Simple usage
  - Sensible default options
