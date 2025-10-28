import styles from './TitleOpportunities.module.css'

const Title = ({ main, highlight }) => (
    <h2 className={styles.title}>
        {main} <span>{highlight}</span>
    </h2>
)

export { Title }
