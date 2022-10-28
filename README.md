# A Modern User Interface With Chakra UI

This project is made following course on [egghead.io](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106) Getting Started With Chakra UI

## Preview

![Preview image of the Order Page User Interface made with Chakra UI](./public/image/preview.png)

## Live

See the project live [here](https://chakra-order-page.vercel.app)

## Getting Started

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

### Installation And Setup

- Install Chakra UI packages.
- Override the boilerplate \_app.tsx.
- Wrap Component with ChakraProvider.

### Build Layout

- We used the Container component to keep our content contained and centered.
- The Flex, Stack, VStack components are use to stack the inner elements.
- Style props are added to components to for width, height, color, bgColor, etc. which have access to the design tokens built in Chakra UI.
- Read more about the style props on Chakra UI docs.

### Built A 2-Column Form

- All components have a unique set of style props that can be used to tweak the element's appearance.
- SimpleGrid component was used to easily create a two column layout for the form.

### Theme Switcher

- Use useColorMode hook to switch between light and dark modes.
- The useColorModeValue helps use different color values based on the current color mode.
- Here, useColorModeValue was used to set the background color of the second(cart) section and to set the color of some Text components.
- Use the result of useColorModeValue as style prop values.

### Make The App Responsive

- There are three ways to achieve responsive design in Chakra UI
  - The Array syntax.
  - The Object syntax.
  - The useBreakpointValue hook.
- Use the `Array` syntax if you want to provide different values for every breakpoint.
- Use the `Object` syntax if you want to switch between two values because of its simplicity.
- Use the `useBreakpointValue` hook if you want to make the `variant` or `size` props responsive.

### Define Custom Fonts And Colors

- Chakra UI comes with an `extendTheme` method that is used to build our custom theme.
- Tell Chakra UI to use the custom theme by passing it to the ChakraProvider.
- Here we've added a custom brand color scale and custom fonts.
- In a similar way, we can customize sizes, breakpoints, shadows, spacing and other design tokens.

### Use Theme Extensions

- Style extensions can be used to set style rules for all instances of a component, without having to manuall set style rules for each of them.
- Chakra UI comes with a few built in style extensions like withDefaultVariant, withDefaultColorScheme, etc.

### Override Built-In Component Styles

- We can override the component style configuration by creating a property inside the components section in theme.
- Overriding the style configuration based on the component state(hover, focus, etc) is also possible.
- Some components are multipart, and they have different style configurations for each part.

### Create Custom Variants

- We can create our own `variants` that have specific style configurations.
- Variants can either be a plain object, or an arrow function that accepts `props` as arguments.
- We used the `mode` method to set different values for the light and dark modes.
