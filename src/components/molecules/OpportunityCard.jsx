import styles from './OpportunityCard.module.css'

const OpportunityCard = ({ title, description, className }) => (
    <div className={`${styles.card} ${className}`}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardDescription}>{description}</div>
    </div>
)

export { OpportunityCard }
