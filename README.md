### GoalApp
- GoaGoalContainer: Manages goal input, list, adding, and deleting goals using useState.

- GoalInput: Handles goal input and button for adding goals.

- GoalItem: Displays each goal, with delete functionality on press.

- FlatList: Renders the goal list efficiently using keyExtractor.

- Styling: Applies consistent design to components with StyleSheet.lContainer: Manages goal input, list, adding, and deleting goals using useState.

### Mini Game

- Game Flow: You use useState to manage the game state, including the user's selected number (userNumber), the game-over status (gameIsOver), 
and the number of guess rounds (guessRounds).

- Functions like pickedNumberHandler start the game, gameOverHandler handles the game-over event, and startNewGameHandler resets the game for a new round.
Screens: Based on the game state, different screens (StartGameScreen, GameScreen, GameOverScreen) are shown. You switch between them dynamically depending 
on whether the user has picked a number or the game is over.

## UI Components:

- PrimaryButton: Custom button component that handles press actions using Pressable.
- NumberContainer: Displays the chosen number with stylized borders and text.
- Title: Styled text for displaying headings, like titles.
- Styling: You’ve applied StyleSheet for component layout and design, using properties like flex, padding, and color constants imported from colors.js.
- Image Background: You use ImageBackground to add a background image to the game interface, with adjustable opacity for styling.

