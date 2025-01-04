import { useTheme } from '../ThemeContext';
import './styles.css';

export const Switch = () => {
    const { toggleTheme } = useTheme();

    return (
        <label className="switch">
            <input
                type="checkbox"
                onChange={toggleTheme}
            />
            <span className="slider round" />
        </label>
    );
};