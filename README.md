<h1>Learning Management System (LMS) - React Page</h1>
<br/>
    <p>Welcome to the LMS React Page project! This project aims to create a seamless learning experience by embedding YouTube videos and assessments in a user-friendly interface. The application is designed to facilitate a structured learning path, allowing users to engage with video content and complete assessments in a vertical scroll layout.</p>
-
    <h2>Features</h2>
    <ul>
        <li><strong>YouTube Video Playback</strong>: Embed YouTube videos in a clean iframe player without displaying additional details such as titles, channel names, or suggested videos.</li>
        <li><strong>Automatic Scrolling</strong>: Automatically scroll to the assessment section once the YouTube video finishes playing.</li>
        <li><strong>Assessment Display</strong>: Show assessments related to the completed video directly below the video frame.</li>
        <li><strong>Manual Navigation</strong>: Users can manually proceed to the next video and assessment using a "Next Task" button, which is only enabled after completing the current assessment.</li>
        <li><strong>Vertical Scroll Layout</strong>: Each video and its corresponding assessment are displayed in a vertical scroll layout for a smooth user experience.</li>
        <li><strong>UI and Accessibility</strong>: Utilize ShadCN components for a consistent and stylish interface, supporting dark mode and ensuring accessibility with ARIA roles and keyboard navigation.</li>
        <li><strong>Dummy Data</strong>: Use dummy JSON data to simulate video URLs and assessment details, making it easy to replace with API integration in the future.</li>
    </ul>
-
    <h2>Requirements</h2>
    <h3>YouTube Video Playback with Hidden Details</h3>
    <ul>
        <li>Embed YouTube videos using the iframe player.</li>
        <li>Configure the iframe to hide video details by adding parameters to the URL.</li>
        <li>Detect when the video finishes and automatically scroll to the corresponding assessment section.</li>
        <li>Load video URLs and metadata from dummy JSON data.</li>
    </ul>
-
    <h3>Assessment Section</h3>
    <ul>
        <li>Display assessments related to the completed video directly below the YouTube frame.</li>
        <li>Include various assessment types:
            <ul>
                <li>Multiple-choice questions with correct answer validation.</li>
                <li>Short answer questions with text input for users.</li>
            </ul>
        </li>
        <li>Provide interactive feedback for user responses.</li>
    </ul>
-
    <h3>Manual Navigation</h3>
    <ul>
        <li>Implement a "Next Task" button to manually scroll to the next section.</li>
        <li>Ensure users can only proceed to the next video and assessment after completing the current assessment.</li>
    </ul>
-
    <h3>Vertical Scroll Flow</h3>
    <ul>
        <li>Ensure smooth transitions between sections during auto or manual scroll.</li>
    </ul>
-
    <h3>UI and Accessibility</h3>
    <ul>
        <li>Use ShadCN components for consistency and style.</li>
        <li>Support dark mode with a toggle.</li>
        <li>Ensure accessibility (ARIA roles, keyboard navigation, and feedback for all interactions).</li>
    </ul>
-
    <h3>Dummy Data</h3>
    <ul>
        <li>Use a JSON object to simulate YouTube video and assessment data .</li>
        <li>Ensure the structure is easy to replace with APIs in the future.</li>
    </ul>
-
    <h2>Acceptance Criteria</h2>
    <h3>YouTube Video Section</h3>
    <ul>
        <li>Videos load in a clean iframe player without showing video titles, channel details, or suggested videos.</li>
        <li>Automatically scrolls to the assessment when the video ends.</li>
        <li>Users can manually navigate using the "Next Task" button.</li>
    </ul>
-
    <h3>Assessment Section</h3>
    <ul>
        <li>Assessments are displayed immediately after their respective videos.</li>
        <li>Validations provide immediate feedback for user inputs.</li>
        <li>Users must complete the assessment to unlock the next video and assessment.</li>
    </ul>
-
    <h3>Flow and Navigation</h3>
    <ul>
        <li>Videos and assessments appear sequentially in a vertical scroll layout.</li>
        <li>Navigation between tasks is smooth and intuitive.</li>
    </ul>
-
    <h3>Dummy Data</h3>
    <ul>
        <li>JSON contains video URLs, titles, and related assessment details.</li>
        <li>All interactions dynamically update the JSON state.</li>
    </ul>
-
    <h3>Performance and Responsiveness</h3>
    <ul>
        <li>The page is responsive and works well on desktop and tablets.</li>
        <li>Video playback and scrolling transitions are smooth without noticeable lag.</li>
    </ul>
-
    <h2>Getting Started</h2>
    <p>To get started with the project, follow these steps:</p>
    <ol>
        <li><strong>Clone the repository</strong>:
            <pre><code>git clone https://github.com/rk28284/AssessmentLms.git
cd AssessmentLms</code></pre>
        </li>
        <li><strong>Install dependencies</strong>:
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Run the application</strong>:
            <pre><code>npm run dev</code></pre>
        </li>
        <li><strong>Open your browser</strong> and navigate to <code>http://localhost:3000</code> to view the application.</li>
    </ol>
