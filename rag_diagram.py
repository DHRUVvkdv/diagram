from diagrams import Diagram, Cluster
from diagrams.programming.language import Python
from diagrams.onprem.database import PostgreSQL
from diagrams.onprem.compute import Server
from diagrams.generic.storage import Storage
from diagrams.generic.compute import Rack
from diagrams.generic.place import Datacenter

# Set the diagram orientation to TB (top-to-bottom) or LR (left-to-right)
graph_attr = {
    "fontsize": "45",
    "bgcolor": "transparent",
    "rankdir": "LR",
}

# Create the diagram
with Diagram("RAG System Architecture", 
            show=False, 
            direction="LR",
            graph_attr=graph_attr,
            outformat="png") as diag:
    
    # Create nodes for each component
    with Cluster("Indexing"):
        kb = Storage("Knowledge\nBase")
        loader = Server("Loader")
        docs = Storage("Documents")
        splitter = Server("Splitter")
        doc_snippets = Storage("Document\nSnippets")
        emb_machine1 = Rack("Embedding\nMachine")
        embeddings = Storage("Embeddings")
        vector_db = PostgreSQL("Vector\nDatabase")

        # Connect indexing components
        kb >> loader >> docs >> splitter >> doc_snippets
        doc_snippets >> emb_machine1 >> embeddings >> vector_db
        doc_snippets >> vector_db

    with Cluster("Retrieval"):
        question = Datacenter("How do I\ndo x?")
        emb_machine2 = Rack("Embedding\nMachine")
        embedding = Storage("Embedding")
        rel_snippets = Storage("Relevant\nSnippets")

        # Connect retrieval components
        question >> emb_machine2 >> embedding >> vector_db
        vector_db >> rel_snippets

    with Cluster("Augmented Answer Generation"):
        llm = Python("LLM")
        answer = Datacenter("To do\nX...")

        # Connect AAG components
        question >> llm
        rel_snippets >> llm >> answer