import Card from "../components/Card"
import { Form } from "../components/Form"
import { ParticipantList } from "../components/ParticipantList"
import { Footer } from "../components/Footer"

export const Configuration = () => {
    return (
        <Card>
            <section>
                <h2>Let's start!</h2>
                <Form />
                <ParticipantList />
                <Footer />
            </section>
        </Card>
    )
}