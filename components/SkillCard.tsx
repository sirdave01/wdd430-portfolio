interface SkillCardProps {
    skill: string;
    level: string;
    description: string;
}

export default function SkillCard({ skill, level, description }: SkillCardProps) {
    
    return (
        
        <div className="p-4 border-1-4 border-blue-600 bg-gray-50 rounded">
            
            <h3 className="text-xl font-bold mb-2">{skill}</h3>
            
            <p className="text-gray-700 mb-3"><strong>Level:</strong> {level}</p>
            
            <p className="text-gray-700">{description}</p>
            
        </div>
        
    );
    
}