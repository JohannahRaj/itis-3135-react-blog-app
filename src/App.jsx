import {createContext, useContext, useState, useEffect} from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom"
import './App.css'

const ThemeContext = createContext()
const blogpostslist = [
  {
    bid: 1, // (blog id)
    title: "Factors from childhood that contribute to literary proficiency in adults",
    author: "Johannah Raj",
    date: "April 27th, 2026",
    content: "   What factors of an adult’s reading and writing experience during elementary and middle school most directly contribute and correlate to his or her current literacy skill? Having frequently interacted with those who tend to thrive in English-heavy environments as well as those who struggle, I have become curious to ascertain what might cause this to be the case. This question was pursued in order to gain an understanding of how a good sense of literacy as it pertains to reading and writing is developed. Exploring this topic thoroughly is vital to improving our education system, especially for teaching younger children before they eventually enter into the higher echelons of academia. It has been agreed upon by many scholars, especially in the past three decades, that literacy skill has been decreasing (Graff). In this article, the perspectives of past scholars on the topic are analyzed and new research was conducted to contribute to it. Information from over 43 participants was collected regarding their reading and writing skill development, and also gathered writing samples to compare for results...",
    comments: [
      {name:"Johannah Raj", message:`First.`}, 
      {name: "Rex Stauss",
      message: `I really enjoyed your article! Genre diversity was not the first factor that came to mind when I thought about your question, so it's interesting that it was a notable factor in your research! Your methodology was interesting as well! I really like the idea of asking for writing samples, and I thought you had a fun prompt to go with it. I can definitely understand wanting to have more detail (I would've liked to interview more people for mine), but I think you did a great job with the information and context you were working with. If you ever decide to expand the article, perhaps you could integrate more of what you read. I haven't heard of Graff, but I was familiar with Jean Piaget and Lev Vygotsky; lots of people looking into the field of children's literary and cognitive development, it seems. Your article also made me think of the idea of "language deserts." My linguistics professor, Dr. Ralf Thiede, is particularly interested in the idea of language as nutrition, and talks about language deserts (areas with limited access to reading materials or other quality language input for children) as having a detrimental impact on children's development.`}]
  },
  {
    bid: 2, 
    title: "The prevailing scholarly consensus on the factors contributing to modern literacy in adults, and in what tone different authors write about it",
    author: "Johannah Raj",
    date: "April 27th, 2026",
    content: `In her book Good Reading and Writing Skills, Mona Lansfjord interacts with work from previous scholars and scientists such as David Wood, Jean Piaget, and Jerome Bruner to compare opinions on the cognitive reasoning that occurs during development of the ability to read and write in children. Describing one particular theory and excerpt by the Soviet psychologist Lev Vygotsky, the author explains how proficiency in reading and writing enables children to develop their self-discipline and ability to see from the perspective of another by putting oneself into their mind. She goes on to state:
              Success in learning to read and write depends on how children are introduced to and guided in developing their skills. This does not happen automatically by giving children the opportunity to use their imagination without restriction. Nor does it happen by forcing them to concentrate and listen to facts that somebody is trying to get across to them (Lansfjord). It is clear her argument is that different children learn with different methods, but the most important factor for their success is to encourage the child from an early age to have an interest in truly understanding reality through literature. With her closing statements in the same chapter, Lansfjord references a “development schedule” created by Bo Sundblad, Kerstin Dominković and Birgita Allard that is meant to track the hallmarks of a person’s growth in literacy throughout their life. The same work is referenced as inspiration for a Swedish article’s premise and research regarding English educational techniques in elementary and middle school (Barajas). Sundblad claims that most children go through the same reading stages; the majority of young learners test out various genres for a short period before spending years reading voraciously within one genre that they confine themselves within. In a separate survey conducted by Andrew B. Pachtman and Karen A. Wilson, it was “observed that what students found contributed most to their reading was: ‘Having a lot of books in the class library.’ [This] brings up an important point: that we should ask young people themselves about their reading habits.”`,
    comments: []
  },
  {
    bid: 3, 
    title: "Methodology",
    author: "Johannah Raj",
    date: "April 27th, 2026",
    content: `In order to collect accurate, relevant data on this topic, factors of a person’s reading habits when they were younger as well as their present reading and writing ability needed to be measured. Surveys were used as a primary research method to collect the information. The intention was to examine a person’s writing ability in the form of a sample after having collected their reading-origins data, and glean what trends might emerge from it. A survey was created digitally, and passed it out to as many people as possible. The participants were English-speaking adults of varying age and nationality. Google Forms was used to create the survey, as it is a convenient and quick-to-utilize resource. 17 questions were written that included yes/no, multiple choice, or short-answer styled questions, such as, “Is English your first language?”; “[When and how] did you learn how to read and write?”; “What genres did you read most in elementary and early middle school?”; and “What were your favorite books [then and now, and when were they written?]”. For the genre question, the “Bible or other religious text” genre was split into three separate subcategories of historical narrative, poetry, and self-help/guidance respectively. Respondents were allowed to write in their own option if it wasn’t already included for multiple questions, which resulted in several unique outliers. There was also a self-rating section that measured one’s perception of their own reading ability, writing ability, and their enjoyment of either activity. After collecting all of the survey’s responses, each factor was isolated into separate groups and compared to examine whether any had a noticeable pattern of producing especially “good” writing samples. To determine the quality of a sample, each was graded with a numerical score issued by myself based on a rubric measuring the four categories of content/ideas, understandability, phrasing, and grammar/spelling for 1-5 points each, with an extra credit “wow factor” opportunity (up to 2 points) for a maximum of 22 points. “Wow factor” was determined by cases of exemplary creativity or effort that went further than what was required. The participants were explicitly told not to use Artificial Intelligence or writing tools, and they were not made aware of the grading rubric. Once the digital form of the survey was finalized, anyone who expressed willingness to fill it out personally was sent it over text or email. People were asked to fill it out in classes or various areas on or outside the University of North Carolina at Charlotte campus, and the link was sent in some forums online. The optional writing sample was to be in the form of a brief statement explaining how “birds are not real” or another conspiracy of the person’s choice. A humorous, lighthearted theme was purposely opted for to procure results that were genuine and accurately reflected someone's current casual writing skill. A singular concern is that issuing this survey digitally may have skewed the results in some way. Many people use devices with built-in autocorrect suggestions, and spelling is one value that was graded. A large portion of the people reached were also active online and—presumably—comfortable communicating over the internet, which involves a lot of quick, improvisational writing. Conducting a majority of these surveys physically would have been incredibly inconvenient, but also may have produced more accurate results. Posting it online allowed the survey to reach people outside of America, however, so it wasn’t confined to one country and received a broader set of data. It would also be prudent to note that the internet’s role itself in a child’s reading and writing development was ignored for the purposes of this survey, even though it may have—particularly for those born in the U.S. after the year 2000—played a part in their literacy growth.`,
    comments: [{name:"Anonymous", message:`How many conspiracy paragraphs did you have to read?`},
      {name:"Johannah Raj", message:`A Lot.`}
    ]
  },
  {
    bid: 4, 
    title: "Analysis",
    author: "Johannah Raj",
    date: "April 27th, 2026",
    content: `The survey received 44 responses. With a preliminary glance at its results, it could easily be seen that “fantasy” was an extremely common favorite genre for children—with close to 80% of participants picking it as an answer—followed by science-fiction. The Harry Potter, Warriors, Percy Jackson, Chronicles of Narnia, Wings of Fire, and Redwall series were commonly quoted as being childhood favorites. Although many people preferred the same baseline in fantasy/sci-fi as a child, it noticeably diversified as one grew into adulthood. There was an increase in non-fiction, philosophy, theology, historical/biographical, dystopian, and thriller as many respondents deviated away from pure fantasy. This suggested a significant evolution in reading taste, possibly reflecting personal growth, pressure from culture, or the influence of higher education. The majority of survey respondents stated that English was their first language, but also that another language had been spoken in their homes while growing up. 85.5% of respondents reported learning to read before the age of 6, and the majority of them attributed their learning to a combination of elementary public school and parental guidance. Most of the respondents reported enjoying modern books as children, but later branched out into literature from older time periods as well. It was a personal hypothesis that the time period one primarily read from during his or her childhood might have had a notable or the largest impact on their current literacy skill; however, no clear evidence or indication of support for this was reflected in the data collected. From the self-rating section, most respondents considered themselves to be strong and confident readers overall, although they were divided on whether they enjoyed it. The same was true for writing, but the sample’s entirety was less confident in that area and more likely to dislike the process of writing. This showed that the enjoyment of either reading or writing by itself does not necessarily correlate to prowess in that activity. Those who had begun reading frequently early on were also shown to continue that into their adult life. Within the writing samples that were gathered, it was pleasantly surprising to find an abundance of rich ideas, witty arguments, and unexpected statistical information woven in to cleverly support creative, outlandish claims. Several participants included cited sources, and most were able to communicate their ideas very effectively. Most writers scored highest in Understandability, while Grammar/Spelling and Phrasing were the two lowest-ranking categories. After grading the writing samples, two identifiable trends were able to be picked out that best related to the research question. First, the samples that received the highest scores tended to have a large amount of parental involvement while learning how to read and write, although it was usually combined along with either school and/or self-motivated reading. Those who reported a more passive approach to reading in childhood—such as minimal parental involvement or a lack of encouragement—seemed less confident in their writing skills, even if they had enjoyed reading as children. This supports that a supportive and nurturing parental presence at home is important when fostering a child’s literacy development, especially if they encourage extra, supplemental reading on top of what is required at elementary or middle school. Secondly, the most prominent and compelling trend I was able to find was that the amount of genre diversity one engaged in as a child almost directly correlated to a marked higher literacy score. Readers who had a narrower scope in childhood, such as those who read “only fantasy” or “didn’t read” most often showed a lower score. While it might have been expected that those from multilingual backgrounds would have possibly shown the largest improvement with literacy score, this was not the case. The data instead seemed to strongly support the idea that genre diversity in early reading correlates with stronger writing skills later on—likely by being exposed to different styles, vocabulary, and narrative structures.`,
    comments: []
  },
  {
    bid: 5, 
    title: "Conclusion",
    author: "Johannah Raj",
    date: "April 27th, 2026",
    content: `To conclude, based on the data collected, an adult is most likely to possess good writing skills if they were encouraged to read a broad range of genres as a young child. This finding is supported by Aidan Chambers, who strongly warns against the overly-repetitive reading of any one kind of book or writer (Chambers 13), and Barajas’ claim that “To avoid repetitious reading, adults should help children read with variation” (Barajas 5). Every child has their own unique strengths, and no one method or technique will work for each one—however, we can use data such as this to identify helpful trends and put them to use in bridging the gaps in literacy and mending any current deficiency or inefficiency when it comes to the development of reading and writing skills. According to Lansfjord, meaningful change in education starts with teachers: The work on bringing about change in the school must come from a clear awareness of how the selection of teaching content is made, and how this affects the teacher’s thinking on methodological approach and organisational change… (Lansfjord). In order to put this research into use by applying it, the educational system should be revitalized by informing and encouraging teachers in elementary and middle school to push their students to escape the boundaries of a single preferred genre, and to keep their shelves stocked with a variety of literary flavor.`,
    comments: [{name:"Anonymous", message:`Nerd`}]
  }
]

/* Old version
function Comment({onAddComment}){
  const [comment, setComment] = useState("")
  function handleSubmit(event){
    event.preventDefault()
    const edited_comment = comment.trim()
    if (!edited_comment) return
    onAddComment(edited_comment)
    setComment("")
  }
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <br></br>
      <label htmlFor="comment">Add a comment: </label>
      <textarea
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        rows="4"
        required
      />
      <br></br>
      <button type="submit">Submit comment</button>
    </form>
  )
}
*/

function CommentForm({onAddComment}){
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  async function handleSubmit(event){
    event.preventDefault()
    const edited_name = name.trim()
    const edited_msg = message.trim()
    if (!edited_name || !edited_msg) return
    //body instead of message
    try {
      // blech, the issue was a missing brace
      await onAddComment({name: edited_name, body: edited_msg})
      setName("")
      setMessage("")}
    catch (error) {window.alert(error.message)}
  }
  
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <br></br>
      <label htmlFor="comment-name">Name: </label>
      <input
        id="comment-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <br></br>
      <label htmlFor="comment-msg">Comment: </label>
      <textarea
        id="comment-msg"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows="4"
        required
      />
      <br></br>
      <button type="submit">Submit comment</button>
    </form>
  )
}

function Navbar({ posts }){
  const {theme, toggleTheme}=useContext(ThemeContext)
  return (
    <nav>
      {/*<Link to="/">Blog</Link>{posts.map((post) => (<span key={post.bid}>{' | '}<Link to={`/posts/${post.bid}`}>{post.title}</Link></span>*/}
      <Link to="/">Blog</Link>{posts.map((post) => (<span key={post.id}>{' | '}<Link to={`/posts/${post.id}`}>{post.title}</Link></span>
      ))}
    {' | '}<Link to="/contact">Contact Me</Link>

    {/*d/l toggle*/}
    <button type="button" onClick={toggleTheme}>
      {theme==="Light"?"Dark":"Light"} Mode</button>
    </nav>
  )
}

//function BlogPost({post, onAddComment, show_full=false}) {
function BlogPost({post, comments=[], onAddComment, show_full=false, author}) {
  return (
    <div className="blogpost">
      <article className="card1">
        <div className="card-header">
          {/*<p>Author: {post.author}</p>*/}
          {author && <p>Author: {author}</p>}
          {/*apparently dates cannot be included anymore*/}
          {/*<p>Date: {post.date}</p>*/}
        </div>
        <br></br>
        <div className="card-body">
          <h3>
            {show_full?(post.title):(<Link to={`/posts/${post.id}`}>{post.title}</Link>)}
          </h3>
          //<p>{post.body}</p>
          <p>{show_full ? post.body : `${post.body.slice(0, 150)}...`}</p>

        </div>
        {show_full && (
        <section className="comments" aria-label="Comments">
          <br></br>
          </section>)}
          <h3>Comments ---</h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment, index) => (
                //<li key={${comment.id} ?? {index}}><strong>{comment.name}</strong>: {comment.body}</li> // use comment id
                <li key={comment.id ?? index}><strong>{comment.name}</strong>: {comment.body}</li> // use comment id
              ))}
            </ul>
          ) : (
            <p>No comments exist yet.</p>
          )}
        <CommentForm onAddComment={onAddComment} />
        
      </article>
    </div>
  )
}

//function BlogPostPage({posts, add_comment}){
function BlogPostPage({posts}){
  return (
    <main>
      {/*<h2>Blog Posts</h2>*/}
      <br></br>
      {posts.map((post) => (<BlogPost key={post.id} post={post}
        //onAddComment={(comment)=> add_comment(post.id, comment)}
      />
      ))}
      </main>
  )
}

//function IndividualPostPage({posts, add_comment}){
function IndividualPostPage(){
  const {id} = useParams()
  //const post = posts.find((item) => item.bid === Number(id))
  const [author, setAuthor] = useState(null)
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [error, setError] = useState("")

  useEffect(()=>{
    let canceled = false

    async function fetchpost_and_author() {
      try{const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
      if (!response.ok) throw new Error("Post not found.")

      const post_data = await response.json()
      const user_response = await fetch(`https://jsonplaceholder.typicode.com/users/${post_data.userId}`)
      
      if (!user_response.ok) throw new Error("Couldn't fetch author.")

        const user_data = await user_response.json()
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        if (!commentsResponse.ok) throw new Error("Couldn't fetch comments.")
        const comments_responses = await commentsResponse.json()

        if (!canceled) {setPost(post_data); setAuthor(user_data); setComments(comments_responses)
        }} catch (error) {if (!canceled) setError(error.message)}}
    fetchpost_and_author()

    return () => {canceled = true}}, [id])

      async function add_pagecomment(comment) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...comment, postId: Number(id)})
      }
    )
    if (!response.ok) throw new Error("Couldn't submit comment.")
    const new_comment = await response.json()
    setComments((currentComments) => [...currentComments, new_comment])
  }

  if (error)
  {
    return (
      <main>
        <h2>Post not found. {error}</h2>
        <Link to="/">Back to blog?</Link>
      </main>
    )
  }
  if (!post || !author)
  {
    return <main><p>Post is loading ~</p></main>
  }
  return (
    <main>
      <br></br>
      <BlogPost show_full post={post} onAddComment={(comment) => add_comment(post.id, comment)}/>
      <Link to="/">* Back to blog *</Link>
      </main>
  )
}

function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault()
    window.alert('Success; your message has been accepted.')
    event.currentTarget.reset()
  }
  return (
    <main>
      <br></br><br></br>
      <h2>-- Contact Information: --</h2>
      <br></br>
      <p>Email address: <a href="mailto:jraj2@charlotte.edu">jraj2@charlotte.edu</a>.</p>
    <br></br><br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" required />
        <br></br>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" type="email" required />
        <br></br>
        <br></br>
        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" rows="4" required />
        <button type="submit">Send Message</button>
        <br></br>
      </form>
    </main>
  )
}

function App() {
  //const [posts, setPosts] = useState(blogpostslist)
  const [posts, setPosts] = useState([])

  // module 11 API addition
  useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    if (!response.ok) throw new Error("Couldn't fetch posts.");
    return response.json()
  }).then((data)=>setPosts(data)).catch((error)=>console.error("There was an error fetching posts.", error))
}, [])
  // I'd personally prefer a site toggle for dark mode over having it depend on computer settings
  const [theme, setTheme] = useState(() => localStorage.getItem("theme")||"Light",)
  function toggleTheme(){
    setTheme((current_theme) => {const new_theme = current_theme === "Light"?"Dark":"Light"
      localStorage.setItem("theme", new_theme)
      return new_theme
    })
  }

  function addComment(postId, comment) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post,
      ),
    )
  }
  return (
    <BrowserRouter>
    <header className="banner">
        <h1>Blog: Linguisiviary</h1>
      <nav>
        {/*<a href="index.html">  Blog</a> | 
        //<a href="contact.html">  Contact Me</a>*/}
        <Link to="/">Blog</Link> | <Link to="/contact">Contact Me</Link>
      </nav>
      </header>
      
      <Routes>
        {/*<Route path="/" element={<BlogPostPage posts={posts} add_comment={addComment} />}*/}
        <Route path="/" element={<BlogPostPage posts={posts} />}
      />
        {/*comment parameter also removed here*/}
        <Route path="/posts/:id" element={<IndividualPostPage posts={posts} />}
      />
        <Route path="/contact" element={<ContactPage />}
      />
      </Routes>

      <footer>
        <p>2026 Johannah Raj; all rights reserved.</p>
      </footer>
      </BrowserRouter>
  )
}

export default App

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/
